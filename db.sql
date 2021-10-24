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

--create the ratings table with user_id as a foreign key and product_id as a foreign key

create table ratings(
    user_id varchar(20) references users(user_id) not null,
    product_id integer references products(product_id) not null,
    rating_content varchar(25),
    star_count integer not null
);

--create the comments table with user_id and product_id as the foreign keys

create table comments(
    user_id varchar(20) references users(user_id) not null,
    product_id integer references products(product_id) not null,
    comment_content varchar(120) not null,
    post_date date not null
);