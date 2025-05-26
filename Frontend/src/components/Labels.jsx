import React from 'react'

const Labels = () => {
  return (
    <>

<div>
  <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name" />
  <label for="floatingInput">Name</label>
</div>

<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Address" />
  <label for="floatingPassword">Address</label>
</div>
<br />
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="telephone" />
  <label for="floatingPassword">Telephone</label>
</div>
<br />
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="schedule" />
  <label for="floatingPassword">Schedule</label>
</div>


    </div>
    </>
    
  );
}

export default Labels;
