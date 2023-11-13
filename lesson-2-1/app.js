const vm = Vue.createApp({
  data() {
    return {
      firstName: "José",
      lastName: "da Silva",
      url: 'https://github.com/guSElias',
      raw_url: '<a href="https://www.google.com.br/" target="_blank">Google</a>',
      age: 20
    }
  },
   methods: {
     fullName() {
       return `${this.firstName} ${this.lastName}`
     },
     increment() {
      this.age++
     },
     updateLastName(event) {
      this.lastName = event.target.value
     }
     
   }
}).mount('#app')

//  setTimeout(() => {
//    vm.firstName = "Bob";
//  }, 2000);

//  Vue.createApp({
//    data() {
//      return {
//        firstName: "Gustavo ",
//        lastName: "de Souza"
//      }
//    }
// // }).mount('#app2')