let vm = new Vue({
    el: '#app',
    data: {
        message: 'Salut les gens !',
        texteDeLien: 'Je suis un lien, cliquez sur moi !',
        link: 'http://www.google.fr',
        success: true,
        cls: 'success',
        people: ['John', 'Jean', 'Bob', 'Caroline', 'Bobby', 'Alphonse'],
        style: {background: 'pink'},
        seconds: 0
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
                return {background: 'purple'}
            }
        },
        addPerson: function() {
            this.people.push('Marion');
        }
    }
})