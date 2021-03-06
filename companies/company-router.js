const express = require("express")

const Company = require("./company-model")

const router = express.Router();

router.get("/", (req, res) => {
    Company.getCompanies()
    .then(event => {
        for( let i = 0; i < event.length; i++){
          if(event[i].capacity === "false"){
            event[i].capacity = false
                  }
          else{
            event[i].capacity = true
          }
          if(event[i].distance === "false"){
            event[i].distance = false
                  }
          else{
            event[i].distance = true
          }
          if(event[i].masks === "false"){
            event[i].masks = false
                  }
          else{
            event[i].masks = true
          }
          if(event[i].home === "false"){
            event[i].home = false
                  }
          else{
            event[i].home = true
          }
          if(event[i].elder === "false"){
            event[i].elder = false
                  }
          else{
            event[i].elder = true
          }
        }
        res.status(200).json(event);
      })
      .catch(err => {
        res.status(400).json({ message: "Error fetching companies from database" });
      });



      router.post('/', (req, res) => {
        Company.addcompanies(req.body)
        .then(company => {
            
            if(company.capacity == 0){
                res.status(200).json({...company, capacity: false})
            }
            else{
                res.status(200).json({...company, capacity: true})
            }

            if(company.distance == 0){
                res.status(200).json({...company, distance: false})
            }
            else{
                res.status(200).json({...company, distance: true})
            }

            if(company.masks == 0){
                res.status(200).json({...company, masks: false})
            }

            else{
                res.status(200).json({...company, masks: true})
            }

            if(company.home == 0){
                res.status(200).json({...company, home: false})
            }
            else{
                res.status(200).json({...company, home: true})
            }
            if(company.elder == 0){
              res.status(200).json({...company, elder: false})
          }
          else{
              res.status(200).json({...company, elder: true})
          }
            res.status(200).json(event);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)({message: "company failed to post"})
        })
        
    });


})

module.exports = router