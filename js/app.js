new Vue({
    el: '#app',
    data: {
        message: 'Salut les gens !',
        texteDeLien: 'Je suis un lien, cliquez sur moi !',
        link: 'http://www.google.fr',
        success: true,
        cls: 'success',
        people: ['John', 'Jean', 'Bob', 'Caroline', 'Bobby', 'Alphonse'],
        style: {background: 'pink'}
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
        }
    }
})