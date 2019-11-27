
var booksArray=[
    {
    name:"THE DA VINCI CODE",genre:"Detective", author:"Dan Brown",release_year:"2003",copies_sold:"1735"
  },
  
 
    
    {
    name
:"HOUNDS OF THE BASKERVILLE",
genre
:"Detective",
author
:"Arthur Conan Doyle",
release_year
:"Release Year-1902",
copies_sold
:"Copies Sold-275"
  },
 
    
    {
        name
:"THE COLOUR OF MAGIC",
genre
:"Comedy",
author
:"Terry Pratchett",
release_year
:"Release Year-1983",
copies_sold
:"Copies Sold-2395"
        
    },
    
    
    {
        
        name
:"TROPIC OF CANCER",
genre
:"Autobiographical novel",
author
:"Henry Miller",
realease_year
:"Release Year-1934",
copies_sold
:"Copies Sold-1147"
    },
    

    
    {
 name
:"THE COLOUR OF MAGIC",
genre
:"Comedy",
author
:"Terry Pratchett",
release_year
:"Release Year-1983",
copies_sold
:"Copies Sold-2395"
  }];
  

  
  
  
  const book = function(req, res){
      res.render('list-display', { books: booksArray });
    };
    
  
  
  
    
  
  
    module.exports = {
        book    
    };