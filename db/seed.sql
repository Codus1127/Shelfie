CREATE TABLE shelfie_products (
id SERIAL PRIMARY KEY,
product_name VARCHAR(50),
price INTEGER,
image_url VARCHAR(1000)
);

INSERT INTO shelfie_products (product_name, price, image_url)
VALUES ('Mens Cityroam CUpsole Chukka Shoes', 140.00, 'https://images.timberland.com/is/image/timberland/A1S5O231-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0'),
('Mens Mt. Davis Waterproof Jacket', 148.00, 'https://images.timberland.com/is/image/timberland/A1YDJ301-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0'),
('Journeymen - Olive Canvas Protective Riding Pants', 299.00, 'https://cdn.shopify.com/s/files/1/1702/7633/products/Screenshot_13_compact.png?v=1554765296');

SELECT * FROM shelfie_products;