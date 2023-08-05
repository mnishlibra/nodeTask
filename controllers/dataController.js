var csv = require('csvtojson');
const express = require('express');
const User = require('../models/user');


const importData = async(req,res) => {
    try {
        var userData = [];
        csv()
        .fromFile(req.file.path)
        .then(async (response) => {
            console.log(response);
            for(let x in response){
                userData.push({
                    agent: response[x].agent,
                    userType: response[x].userType,
                    policy_mode: response[x].policy_mode,
                    producer: response[x].producer,
                    policy_number: response[x].policy_number,
                    premium_amount_written: response[x].premium_amount_written,
                    premium_amount: response[x].premium_amount,
                    policy_type: response[x].policy_type,
                    company_name: response[x].company_name,
                    category_name: response[x].category_name,
                    policy_start_date: response[x].policy_start_date,
                    policy_end_date: response[x].policy_end_date,
                    csr:response[x].csr,
                    account_name:response[x].account_name,
                    email:response[x].email,
                    gender:response[x].gender,
                    firstname:response[x].firstname,
                    city:response[x].city,
                    account_type:response[x].account_type,
                    phone:response[x].phone,
                    address:response[x].address,
                    state:response[x].state,
                    zip:response[x].zip,
                    dob:response[x].dob,
                    primary:response[x].primary,
                    Applicant_ID:response[x].Applicant_ID,
                    agency_id:response[x].agency_id,
                    hasActive_ClientPolicy:response[x].hasActive_ClientPolicy
                })            }
        })   
        console.log(userData);
        await User.insertMany(userData);

        res.send({success : true , message : 'csv imported' });
    } catch (error) {
        res.send({success : false , message : 'not updated'});
    }
}

module.exports = {
    importData
};