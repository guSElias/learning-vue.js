const vm = Vue.createApp({
  data() {
    return {
      firstName: "José",
      lastName: "da Silva"
    }
  },
   methods: {
     fullName() {
       return `${this.firstName} ${this.lastName}`
     }
   }
}).mount('#app')

 setTimeout(() => {
   vm.firstName = "Bob";
 }, 2000);

//  Vue.createApp({
//    data() {
//      return {
//        firstName: "Gustavo ",
//        lastName: "de Souza"
//      }
//    }
// // }).mount('#app2')