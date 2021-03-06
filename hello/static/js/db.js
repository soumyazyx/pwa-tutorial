// real-time listener
db.collection('recipes').onSnapshot((snapshot) => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        console.log(change, change.doc.data(), change.doc.id);
        if(change.type === 'added'){
            // add document data to webpage
            renderRecipe(change.doc.data(), change.doc.id)
        }
        if(change.type === 'removed'){
            // remove the document data from webpage
        }
    });
})