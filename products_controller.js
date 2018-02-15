module.exports = {
    create: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const {name,description,price,imageurl} = req.body
        dbInstance.create_product({name: name, description: description, price: price, imageurl: imageurl})
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    },
    getOne: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product({productid: req.params.id})
        .then((product) => res.status(200).send(product))
        .catch((err) => res.status(500).send(err))
    },
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products()
            .then((products) => res.status(200).send(products))
            .catch((err) => res.status(500).send(err))
    },
    update: (req,res,next) => {
        const dbInstance = req.app.get('db')
        const {desc} = req.query
        dbInstance.update_product({productid: req.params.id, description: desc})
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
        
    },
    remove: (req,res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_product({productid: req.params.id})
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))
    }
}