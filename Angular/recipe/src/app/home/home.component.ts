// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {
//   cards = [
//     {
//       imageUrl: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
//       title: 'Chicken Curry',
//       description: 'To view the chicken Curry recipe click on view recipe'
      
//     },
//     {
//       imageUrl: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/10/1-5.jpg',
//       title: 'Chicken Pakkodi',
//       description: 'To view the chicken pakkodi recipe click on view recipe'
//     },
//     {
//       imageUrl: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
//       title: 'Chicken Curry',
//       description: 'To view the chicken Curry recipe click on view recipe'
//     },
//     {
//       imageUrl: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/10/1-5.jpg',
//       title: 'Chicken Pakkodi',
//       description: 'To view the chicken pakkodi recipe click on view recipe'
//     },
//     {
//       imageUrl: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
//       title: 'Chicken Curry',
//       description: 'To view the chicken Curry recipe click on view recipe'
      
//     },
//     {
//       imageUrl: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/10/1-5.jpg',
//       title: 'Chicken Pakkodi',
//       description: 'To view the chicken pakkodi recipe click on view recipe'
//     },
//     {
//       imageUrl: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
//       title: 'Chicken Curry',
//       description: 'To view the chicken Curry recipe click on view recipe'
//     },
//     {
//       imageUrl: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/10/1-5.jpg',
//       title: 'Chicken Pakkodi',
//       description: 'To view the chicken pakkodi recipe click on view recipe'
//     }

//   ];
//   getRecipeLink(title: string): string {
//     switch (title) {
//       case 'Chicken Curry':
//         return '/chickencurry';
//       case 'Chicken Pakkodi':
//         return '/chickenpakkoda';
//       default:
//         return '/';
//     }
//   }

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      imageUrl: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
      title: 'Chicken Curry',
      description: 'To view the chicken Curry recipe click on view recipe'
      
    },
    {
      imageUrl: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/10/1-5.jpg',
      title: 'Chicken Pakkodi',
      description: 'To view the chicken pakkodi recipe click on view recipe'
    },
    {
      imageUrl: 'https://www.thevellorekitchen.in/wp-content/uploads/2023/01/Hyderabadi-Chicken-Briyani.jpg',
      title: 'Chicken Biryani',
      description: 'To view the chicken Biryani recipe click on view recipe'
    },
    {
      imageUrl: 'https://bfoodale.com/uploads/2021/12/Mutton-Biryani.jpg',
      title: 'Mutton Biryani',
      description: 'To view the chicken biryani recipe click on view recipe'
    },
    {
    //   imageUrl: 'https://aahaaramonline.com/wp-content/uploads/2016/12/Usirikaya_Annam_Nellikai_Sadam_Usirikaya_Pulihora_Amla_Rice.jpg',
    //   title: 'Pulihora',
    //   description: 'To view the pulihora recipe click on view recipe'
      
    // },
    
      imageUrl: 'https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
      title: 'Chicken Fried Rice',
      description: 'To view the chicken fried rice recipe click on view recipe'
    },
    {
    imageUrl: 'https://aahaaramonline.com/wp-content/uploads/2016/12/Usirikaya_Annam_Nellikai_Sadam_Usirikaya_Pulihora_Amla_Rice.jpg',
    title: 'Pulihora',
    description: 'To view the pulihora recipe click on view recipe'
    
  },
    {
      imageUrl: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg',
      title: 'Vegetable Biryani',
      description: 'To view the vegetable biryani'
    },
    {
      imageUrl: 'https://st4.depositphotos.com/19960896/23021/i/600/depositphotos_230216420-stock-photo-schezwan-noodles-vegetable-hakka-noodles.jpg',
      title: 'Veg Noodles',
      description: 'To view the veg Noodles recipe click on view recipe'
    }

  ];
  getRecipeLink(title: string): string {
    switch (title) {
      case 'Chicken Curry':
        return '/chickencurry';
      case 'Chicken Pakkodi':
        return '/chickenpakkoda';
        case 'Chicken Biryani':
        return '/chickenbiryani';
        case 'Mutton Biryani':
        return '/muttonbiryani';
        case 'Pulihora':
        return '/pulihora';
        case 'Chicken Fried Rice':
        return '/chickenfriedrice';
        case 'Vegetable Biryani':
        return '/vegetablebiryani';
        case 'Veg Noodles':
        return '/vegnoodles';
      default:
        return '/';
    }
  }

}