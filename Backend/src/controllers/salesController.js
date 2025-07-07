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




/********************** D E L E T E **************************/


salesController.deleteSales = async (req , res) => {
    try {
        await salesModel.findByIdAndDelete(req.params.id)
        res.json({message: "The sales has been delete"})
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Internal Error"})
    }
};


/********************** U P D A T E **************************/




// ======================
//  Ventas por categoria
// ======================

salesController.getSalesByCategory = async ( req , res ) => {
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{ _id: "$category" , totalVentas: {$sum: "$total"}}
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
                    $group: { _id: "$products" , totalSales: {$sum:1}}
                }
            ]
        )
    } catch (error) {
        
    }
}

