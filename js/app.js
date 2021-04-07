// Création de son propre composant
// Vue.component('message', {
//     props: { //['type', 'message'],
//         type: {type: String, default:'success'},
//         message: String
//     },
//     template: `<div class="ui message" :class="type"> {{ message }} </div>`
// })

// ou bien sous forme de variable 
let message = {
    props: {
        type: {type: String, default:'success'},
        message: String,
        header: String
    },
    template: `<div class="ui message" :class="type">
        <i class="close icon" @click.prevent="close"></i>
        <div class="header"> {{ header }} </div>
        {{ message }} 
     </div>`,
     methods: {
         close() {
             this.$emit('close');
            // this.$parent.$data.alert =  false;
         }
     }
}


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

// Composant de compteur
let counter = {
    data: function () {
       return  {
           count: 0
        }
    },
    // computed: {
    //     total: function() {
    //         this.start + this.count;
    //     }
    // },
    props: {
        start: {type: Number, default: 0}
    },
    methods : {
        increment: function() {
            this.count ++;
        }
    },
    template: `<div>
    <button @click="increment">{{ count }}</button>
    </div>`,
    mounted: function() {
        this.count = this.start;
    }
}


let formUser = {
    props: {
        value: Object
    },
    data() {
        return {
            user: {...this.value}
        }
    },
    methods: {
        save () {
            this.$emit('input', this.user)
        }
    },
    template: `
    <form class="ui form" @submit="save"> 
        <p><slot name="header"></slot></p>
        <div class="field">
            <label for="">Prénom</label>
            <input type="text" v-model="user.firstname">
        </div>
        <div class="field">
            <label for="">Nom</label>
            <input type="text" v-model="user.lastname">
        </div>
        <button class="ui button" type="submit">Envoyer</button>

        <p><slot name="footer"></slot></p>
   
    </form>
    `,
    mounted: function () {
        console.log(this)
    }
}


let vm = new Vue({
    el: '#app',
    components: { message, counter, formUser},
    filters: { capitalize },
    data: {
        message: 'Voici un super message',
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
        fullname: '',
        alert: false,
        user: {
            firstname: 'Jean',
            lastname: 'Eustache'
        }
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
        },
        showAlert: function() {
            this.alert = true;
        },
        hideAlert: function() {
            this.alert = false;
        }
    },
    directives: {
        salut
        // ↓ Équivalent à
        // salut: salut
    } 
})