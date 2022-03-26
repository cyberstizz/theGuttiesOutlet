--first creating the users table with the user id as the primary key

create table users(
user_id varchar(20) primary key,
session_id integer unique not null,
user_password varchar(20) not null,
email_address varchar(20) unique not null,
physical_address varchar(50)
);

--temporarily
create table users(
    username varchar(30) unique not null,
    password varchar(60) primary key,
    expire int
);

alter table users
alter column password varchar(60);

--create the products table with the product id as the primary key

create table products(
    product_id  integer primary key,
    product_name varchar(50) unique not null,
    product_price integer unique not null,
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

--create the orders table with order_id as the primary key and user_id as the foreign key

create table orders(
    order_id integer primary key,
    user_id varchar(20) references users(user_id) not null,
    total_price integer not null,
    order_date date not null
);

--laslty create the order_items table connected to product_id and order_id as the foreign keys

create table order_items(
    order_id integer references orders(order_id) not null,
    product_id integer references products(product_id) not null,
    quantity integer not null,
    product_price integer references products(product_price) not null,
    total_price integer not null
);

-- new table just for testing purposes

create table cos(
    name varchar(20),
    age integer,
    skill integer
);

-- creating lots of entries to test filling up the database
--insert into cos(name, age, skill) values('Stizz', 37, 10);

insert into cos(name, age, skill) values('Rexx', 29, 6);

insert into cos(name, age, skill) values('Harry-Matos', 39, 10);

insert into cos(name, age, skill) values('Techs-Chambers', 37, 10);

insert into cos(name, age, skill) values('Drama', 33, 8);insert into cos(name, age, skill) values('Stizz', 37, 10);

insert into cos(name, age, skill) values('Taz', 32, 5);insert into cos(name, age, skill) values('Stizz', 37, 10);

insert into cos(name, age, skill) values('Z', 30, 7);

-- more test entries to test how the bytea fits in my components

create table pictester(
    sneaker bytea not null,
    name varchar(20) unique not null,
    price integer not null,
    description varchar(100) not null
);

create table pictesterTwo(
    sneakerPath varchar(120) not null,
    name varchar(20) unique not null,
    price integer not null,
    description varchar(100) not null
);

insert into pictestertwo(sneakerPath, name, price, description) values('/pics/levelupphoto-yeey.png', 'levelup', 5, 'just do it');


--these will be the queries for twenty items buit before the pic is added
--then I will add the pic after manual querying through the client

insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Jordan-10sphoto-jordanTen.jpg', 'Jordan-10s', 299, 'The second best jordans ever');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Air-Force-Onephoto-airfoceones.jpeg', 'Air-Force-One', 129, 'For the classic man!');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Timsphoto-Tims.webp', 'Tims', 249, 'So she can feel your thug');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Crocsphoto-crocs.jpg', 'Crocs', 35, 'No idea why these are a thing');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Jordan-3sphoto-jordan3.jpg', 'Jordan-3s', 400, 'Perfection');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Jordan-9sphoto-jordan9.jpg', 'Jordan-9s', 500, 'my favorite');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Jordan-12sphoto-jordan12.jpg', 'Jordan-12s', 100, 'Because your going bowling');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Jordan-13sphoto-jordan13.jpg', 'Jordan-13s', 250, 'Astronauts need love to');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Oxfordsphoto-oxford.webp', 'Oxfords', 79, 'If you wear these you get it');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Starburysphoto-starbury.jpg', 'Starburys', 49, 'Look he tried. I had a pair');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/John-Cletasphoto-johncletas.jpg', 'John-Cletas', 49, 'Miami swag');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Kyrie-Irvingsphoto-kyrie.jpg', 'Kyrie-Irvings', 1000, 'God body!!!!!!!!');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Chuck-Taylorsphoto-chuckTaylor.jpg', 'Chuck-Taylors', 129, 'Simply wack');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Reebok-Pumpsphoto-pump.jpeg', 'Reebok-Pumps', 249, 'Remember these? lol your old');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Air-Penny 2photo-penny.jpg', 'Air-Penny 2', 275, 'Single ugliest sneaker ever');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Foamposite-Onephoto-foam.jpg', 'Foamposite-One', 600, 'When you wanna wear the batmobile');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Red-Octobers!!!photo-Yeezy-2.jpg', 'Red-Octobers!!!', 52000, 'Ohhh Yeahh');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Vansphoto-vans.jpg', 'Vans', 349, 'because your girlfriends Russian');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/New-Balance-576photo-newBalance.jpg', 'New-Balance-576', 249, 'Show you have a deep bag');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Nike-Dunkphoto-dunk.jpeg ', 'Nike-Dunk', 249, 'The originator');
insert into pictestertwo(sneakerPath, name, price, description) values('/pics/Nike-Cortezphoto-Cortez.jpg', 'Nike-Cortez', 69, 'Money makin Mitch!');


-- this will be my temporary users table to test authentication before the reimplimentation fo the entire schema
