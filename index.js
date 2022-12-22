const inquirer = require('inquirer');
const fs = require('fs');

// Make Staff known
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Enigineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')

// HTML
const generateHTML = require('./src/generateHTML');

// Team members
const teamArr = [];

