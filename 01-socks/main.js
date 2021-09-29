const app = Vue.createApp({
    data () {
        return {
            cart: 0,
            product: 'Cat',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/p-01.png', quantity: 50, onSale: true},
                { id: 2235, color: 'blue', image: './assets/images/p-02.png', quantity: 0, onSale: false}
            ]
        }
    },
    methods: {
        addToCart () {
            this.cart += 1
        },
        decreaseOfCart() {
            if(this.cart > 0){
                this.cart -= 1
            }
        },
        updateVariant(index){
            this.selectedVariant = index

        }
    },
    computed: {
        title() {
            if( this.variants[this.selectedVariant].onSale ){
                return this.brand + ' ' + this.product + ' Is On SALE'
            }else{
                return this.brand + ' ' + this.product
            }
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
    }
})