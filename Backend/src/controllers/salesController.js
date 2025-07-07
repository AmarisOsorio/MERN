const salesController = {};
import salesModel from "../models/Sales.js";


/********************** S E L E C T **************************/


salesController.getAllSales = async (req , res) => {
    try {
        const sales = await salesModel.find()
        res.status(200).json(sales)
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})
    }
};


/********************** I N S E R T **************************/


salesController.insertSales = async (req, res) => {
    try {
       const {product, category, customer, total} = req.body;
       
       if(total < 0){
        res.status(400).json({message: "El total no puede ser negativo"});
       }
 
       const newSale = new salesModel({product, category, customer, total});
       
       await newSale.save();
 
       res.status(200).json({message: "Venta registrada correctamente"});
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Error al registrar la venta" });
    }
}


/********************** D E L E T E **************************/


salesController.deleteSales = async (req , res) => {
    try {
        await salesModel.findByIdAndDelete(req.params.id)
        res.json({message: "The sales has been delete"})
    } catch (error) {
        console.log("Error" + error)
        res.status(500).json({message: "Error al eliminar la venta"})
    }
};


/********************** U P D A T E **************************/


salesController.updateSales = async (req, res) => {
    try {
        const {product, category, customer, total} = req.body;
        if(total < 0){
            res.status(400).json({message: "El total no puede ser negativo"});
           }
 
           await ventasModel.findByIdAndUpdate(req.params.id, {product, category, customer, total}, {new: true});
 
           res.status(200).json({message: "Venta actualizada correctamente"});
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({ message: "Error al actualizar la venta" });
    }
}


// ======================
//  Ventas por categoria
// ======================

salesController.getSalesByCategory = async ( req , res ) => {
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{ 
                        _id: "$category" , //Es el campo padre, para poder hacer la sumatoria
                        totalVentas: {$sum: "$total"}
                    }
                },

                //ordenar los resultados
                {
                    $sort: {totalVentas: -1}
                }
            ]
        )

        res.status(200).json(resultado)
    } catch (error) {
        console.log("Error" + error)
        res.status(500).json({message: "Internal server error"})
    }
}


// =========================
//  Productos más vendidos
// =========================

salesController.getTopSellingProducts = async ( req , res ) => {
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group: { _id: "$product" , totalSales: {$sum:1}}
                },

                //Ordenar los resultados
                {
                    $sort: {totalSales: -1}
                },

                //Limitar la cantidad de datos a mostrar
                {
                    $limit: 5
                }
            ]
        )

        res.status(200).json(resultado);

    } catch (error) {
        console.log("Error" + error);
        res.status(500).json({ message: "Internal server error"})
    }
}


// ====================
//  Ganancias Totales
// ====================

salesController.totalEarnings = async ( req, res ) => {
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: null, //En este caso como no hay un campo padre este se coloca como nulo
                        ganaciasTotales: {$sum: "$total"}
                    }
                }
            ]
        )

        res.status(200).json(resultado)

    } catch (error) {
        console.log( "Error" + error )
        res.status(500).json({ message: "Internal server error"})
    }
}


// =====================
//  Clientes Frecuentes
// =====================

salesController.getFrequentCustomers = async ( req , res ) => {
    try {
        
        const resultado = await salesModel.aggregate(
            [
                {
                    $group: {
                        _id: "$customer",
                        comprasRealizadas: {$sum: 1}
                    }
                },

                //Ordenar las compras de mayor a menor
                {
                    $sort: {comprasRealizadas: -1}
                },
                {
                    $limit: 3
                }
            ]
        )

        res.status(200).json(resultado);
        
    } catch (error) {
        console.log("Error" + error)
        res.status(500).json({ message: "Internal server error"})
    }
}


export default salesController;


/**
 * Recuerda: 
 * 
 *    En este caso lo que colocamos es que vamos a ir
 *    cliente por cliente, verificando: 
 *    comprasRealizadas: {$sum: 1}
 * 
 *    Mientras que esta línea nos ayuda a ordenar los 
 *    valores:
 *    $sort: {comprasRealizadas: -1}
 *    Estos tienen los 2 valores lo cuales son:
 *       1 de Menor a mayor
 *      -1 de Mayor a menor
*/