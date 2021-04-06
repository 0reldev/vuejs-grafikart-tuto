let vm = new Vue({
    el: '#app',
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
        }
    }
})