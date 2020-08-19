window.onload = (() => {
    new Vue({
        el: '#app',
        data: {
            titulo: 'aquí va algo',
            hue: 180,
            sat: 50,
            lig: 50
        },
        methods: {
            getHlsaColor(hue, sat, lig) {
                return `hsla(${hue}, ${sat}%, ${lig}%, 1)`
            }
        },
        computed: {
            color: function () {
                return this.getHlsaColor(this.hue, this.sat, this.lig)
            }
        }

    })

})