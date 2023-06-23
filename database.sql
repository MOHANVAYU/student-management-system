show databases;

create database student;

use student;

show tables;

create table batch(
	sr_no int auto_increment primary key,
    roll_no int not null,
    first_name varchar(50) not null,
    last_name varchar(50),
    age int,
    email varchar(255),
    phone_no varchar(20),
    blood_grp varchar(5),
    father_name varchar(50),
    mother_name varchar(50)
);

desc batch;


insert into batch(roll_no,first_name,last_name,age,email,phone_no,blood_grp,father_name,mother_name) values (100,"Alan","White",21,"alan.white@gmail.com","+917265937462","B+","Pyro White","Zen White");
insert into batch(roll_no,first_name,last_name,age,email,phone_no,blood_grp,father_name,mother_name) values (101,"Blaze","Claymore",18,"blaze.claymore@gmail.com","+918947355427","A+","Alaxander Claymore","Alisha Claymore");
insert into batch(roll_no,first_name,last_name,age,email,phone_no,blood_grp,father_name,mother_name) values (102,"Vayu","",22,"vayu@gmail.com","+917728364459","B-","Varun","Nisha");
insert into batch(roll_no,first_name,last_name,age,email,phone_no,blood_grp,father_name,mother_name) values (103,"John","Smith",23,"john.smith@gmail.com","+917834456172","O+","David Smith","Emily Smith");
insert into batch(roll_no,first_name,last_name,age,email,phone_no,blood_grp,father_name,mother_name) values (104,"Andrew","Anderson",20,"andrew.anderson@gmail.com","+912744639207","AB+","Daniel Anderson","Jessica Anderson");
insert into batch(roll_no,first_name,last_name,age,email,phone_no,blood_grp,father_name,mother_name) values (105,"James","",21,"James@gmail.com","","B+","Benjamin","Emma");

create view home_view as select sr_no,roll_no,first_name,last_name from batch;

select * from home_view;

select * from batch;