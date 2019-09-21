INSERT INTO shelfie_products
(product_name, price, image_url)
VALUES ($1, $2, $3);

SELECT * FROM shelfie_products;