--first creating the users table with the user id as the primary key

create table users(
user_id varchar(20) primary key,
session_id integer unique not null,
user_password varchar(20) not null,
email_address unique not null,
physical_address varchar(50)
);

--create the products table with the product id as the primary key

create table products(
    product_id  integer primary key,
    product_name varchar(50) unique not null,
    product_price integer not null,
    product_description varchar(200) not null,
    product_quantity integer not null,
    product_image_one bytea,
    product_image_two bytea,
    product_image_three bytea,
    product_image_four bytea,
    product_ratings integer,
    product_delivery_time varchar(20) not null,
    date_added date not null
);