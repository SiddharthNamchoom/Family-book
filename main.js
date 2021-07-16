var images = [
      "https://i.pinimg.com/originals/3f/51/47/3f51479133ffcaaeac8f349a325915cb.png",
      "https://tse3.mm.bing.net/th?id=OIP.xrSp9nzjk4EDdCAzpWW0uwHaKj&pid=Api&P=0&w=300&h=300",
      "https://qph.fs.quoracdn.net/main-qimg-33303658c427a398ebf89538bbb7660c",
      "http://clipartmag.com/images/old-man-images-cartoons-34.jpg",
      "https://tse4.mm.bing.net/th?id=OIP.ZY4-haTZnMo8EkbWRV7t7wHaJY&pid=Api&P=0&w=300&h=300"
    ];
    var names = ["Ranbir Singh","Rocky Singh","Alia Singh","Diljeet Singh","Soni Singh"]
    var i = 0;
    
    function NextSlide() {
      
      if(i == 5)
        {
           i=0;
        }
    document.getElementById("IMG").src = images[i];
    document.getElementById("Name).src = names[i];
      
      i++;
    }
    