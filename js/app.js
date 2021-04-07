// Création de sa propre directive
Vue.directive('salut', {
    bind: function(el, binding, vnode) {
        // console.log(el, binding);
        el.value = binding.value;
        console.log('bind');
    }, 
    update: function(el, binding, vnode, oldvnode) {
        console.log('update');
    }
}) 

// ↓ Ça fonctionne aussi bien
// Vue.directive('salut', function (el, binding) {
//     el.value = binding.value;
//     console.log('bind');
// }


Vue.filter('capitalize', function (value, prefix, suffix) {
    return prefix + value.toUpperCase() + suffix;
})

Vue.filter('reverse', function (value) {
    return value.split('').reverse().join('');
})

let capitalize = function(value, prefix, suffix) {
    return prefix + value.toUpperCase() + suffix;
}


let salut = function(el, binding) {
    el.value = binding.value;
    console.log('bind');
}

let vm = new Vue({
    el: '#app',
    filters: { capitalize },
    data: {
        message: 'Salut les gens !',
        message2: '',
        texteDeLien: 'Je suis un lien, cliquez sur moi !',
        link: 'http://www.google.fr',
        success: false,
        cls: 'success',
        people: ['John', 'Jean', 'Bob', 'Caroline', 'Bobby', 'Alphonse'],
        style: {background: 'pink'},
        seconds: 0,
        firstname: 'Jean',
        lastname: 'Poche',
        fullname: ''
    },
    mounted: function() {
        this.$interval = setInterval(() => {
            console.log('Time');
            this.seconds++;
        }, 1000)
    },
    destroyed: function() {
        clearInterval(this.$interval)
    },
    computed: {
        cls2: function()  {
            console.log('cls2 called');
            return this.success === true ? 'success' : 'error';
        },
        // fullname: {
        //     get: function() {
        //         return this.firstname + ' ' + this.lastname;
        //     },
        //     set: function(value) {
        //         console.log(value);
        //         let parts = value.split(' ');
        //         this.firstname = parts[0];
        //         this.lastname = parts[1]
        //     }  
        // }
    },
    watch: {
        fullname: function (value) {
            console.log('watch', value);
        }
    },
    methods: {
        close: function() {
            this.message="Valeur changée !";
            if (this.success == true) {
                this.success = false
            } else {
                this.success = true
            }
        },
        changeBackgroundColor: function() {
            if (this.success) {
                return {background: 'grey'}
            } else {
                return {background: 'yellow'}
            }
        },
        addPerson: function() {
            this.people.push('Marion');
        },
        // ↓ equivalent à "@click.prevent"
        // demo: function(e) {
        //     console.log('Salut !', e.preventDefault());
        // }
        // permet de détecter et de stopper l'événement
        demo: function() {
            console.log('démo');
        },
        demo2: function() {
            console.log('démo2');
        }
    },
    directives: {
        salut
        // ↓ Équivalent à
        // salut: salut
    } 
})