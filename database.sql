show databases;

create database student;

use student;

show tables;

create table batch(
	sr_no int auto_increment primary key,
    first_name varchar(50),
    last_name varchar(50),
    age int
);

desc batch;

insert into batch(first_name,last_name,age) values ("Alan","White",21);
insert into batch(first_name,last_name,age) values ("John","Wick",19);
insert into batch(first_name,last_name,age) values ("Jake","Parkar",22);
insert into batch(first_name,last_name,age) values ("Blaze","Claymore",21);
insert into batch(first_name,last_name,age) values ("Naruto","Uzumaki",18);
insert into batch(first_name,last_name,age) values ("Sasuke","Uchiha",19);

select * from batch;







