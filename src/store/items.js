export default {
    state:{
        items:[
            {
                id: '120',
                title: 'First item',
                description: 'Hello world item 1',
                promo: false,
                src: 'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiJkYWVmMzBlNS1jYWNlLTRmOTAtODEzMy1hOTk4OGZhODE1NTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='
            },
            {
                id: '121',
                title: 'Second item',
                description: 'Hello world item 2',
                promo: true,
                src: 'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiIxMWQ5MWU3Ni00NGJlLTQ4NjAtOTNlMS1kMzljOGMzYjUxMTAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='
            },
            {
                id: '122',
                title: 'Third item',
                description: 'Hello world item 3',
                promo: false,
                src: 'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiI3YWNkOWNjMy0xMThlLTQ0NjQtYWU5MS1kYzlhNDViMjJmZmEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='
            },
            {
                id: '123',
                title: 'Fore item',
                description: 'Hello world item 4',
                promo: true,
                src: 'https://d17pkle29f0gkk.cloudfront.net/eyJidWNrZXQiOiJwYWx0b3MiLCJrZXkiOiI4NzE1YWM0MS1mODgyLTQ4MzQtYWI2ZC1mYzE5YjhjYzg2YmMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxNDI0LCJoZWlnaHQiOjgwMH19fQ=='
            },
        ]
    },
    mutation:{},
    actions:{},
    getters:{
        items(state){
            return state.items
        },
        promoItems(state){
            return state.items.filter(ad=>ad.promo)
        },
        myItems(state){
            return state
        }
    }
}
