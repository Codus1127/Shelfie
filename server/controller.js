module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, price, url } = req.body

        dbInstance.create_product(name, price, url).then(result => {
            res.status(200).send(result)
        })
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, something went wrong' });
                console.log(err)
            })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params

        dbInstance.read_product(id).then(products => res.status(200).send(products[0]))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, something went wrong' });
                console.log(err)
            })
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products().then(
            products => res.status(200).send(products)
        )
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, something went wrong' })
                console.log(err)
            })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params, body } = req;

        dbInstance.update_products(body.name, body.price, body.url, params.id).then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, something went wrong' })
                console.log(err)
            })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_product(id).then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, something went wrong' })
                console.log(err)
            })
    }


}