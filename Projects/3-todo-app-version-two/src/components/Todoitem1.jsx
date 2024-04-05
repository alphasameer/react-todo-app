function Todoitem1() {
  let TodoName = "Buy Milk";
  let TodoDate = "4/10/2024";

   return <div class="container all-center">
   <div class="row" id="left">
   <div class="col-4">
     {TodoName}
   </div>
   <div class="col-4">
     {TodoDate}
   </div>
   <div class="col-4">
   <button type="button" class="btn btn-danger mybtn">Delete</button>
   </div>
 </div>
 </div>
}

export default Todoitem1;