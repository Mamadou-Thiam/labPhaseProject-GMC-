const Candidature = require("../models/candidature")


// sauvegarder un candidature
module.exports.createCandidature =  (async (req,res) => {
    const {firstName,lastName,cv,motivation,email,telephone} = req.body
    const candidature = await   Candidature.create({
        firstName,
        lastName,
        cv,
        motivation,
        email,
        telephone
    })
    return res.status(200).json({message : "candidature created " , candidature})
})
// voir tout les candidatures
module.exports.allCandidature=(async(req,res) => {
    Candidature.find()
      .then(candidature => res.json(candidature))
      .catch(err => res.status(404).json({ error: 'No Books found' }));
  });

// modifier un candidature
module.exports.updateCandidature=(async(req,res)=>{
    Candidature.findByIdAndUpdate(req.params.id, req.body)
    .then(candidature => res.json({ message: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
})


// voir un book à partir de l'identifiant
module.exports.viewCandidature=(async(req,res)=>{
    Candidature.findById(req.params.id)
    .then(candidature => res.json(candidature))
    .catch(err => res.status(404).json({ message: 'No book found' }));
})



// / supprimer un book
module.exports.removeCandidature=(async(req,res)=>{
    Candidature.findOneAndDelete (req.params.id, req.body)
      .then(candidature => res.json({ message: 'candidature entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
})