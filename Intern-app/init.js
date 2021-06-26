{/* <div class="All">All</div>
                    <div class="Quizzes">Quizzes</div>
                    <div class="Stories">Stories</div>
                    <div class="Top Quizzes">Top Quizzes</div>
                    <div class="Waiting Room">Waiting Room</div> */}



let feedOptions=document.querySelector(".feed-options");
let storyGenres=document.querySelector('.story-genres');
let popularTags=document.querySelector('.popular-tags');
let leftSideStoryfeed=document.querySelector('.leftside-story-feed');
let topQuixArea=document.querySelector('.top-quizzes');
let feedoptionsArr=["All",'Quizzes','Stories','Top Quizzes','Waiting Room'];
let StorygenresArr=['Action','Adventure','Romance','Long','Historical','Horror','Humor','Mystery',
    'Nonfiction','Poetry','Realistic','Fantasy','Fanfiction','Thriller','Challenge',
    ];
let popularTagsArr=['Girls', 'Friends', 'Fun', 'Teens',
        'Love',  'Personality',  'Food', 'History', 'Name',  'Generator',  'Character',  'Lifestyle', 'Religion',  
        'Music', 'StyleAnimals', 'Knowledge', 'Pets', 'Tradition' , 'Life', 'Culture', 'Literature', 
        ];

(function(){
    let feedContenthtml="";
    for(let i=0;i<feedoptionsArr.length;i++){
       feedContenthtml+=`<div class="${feedoptionsArr[i]}">${feedoptionsArr[i]}</div>`;
    }
    feedOptions.innerHTML=feedContenthtml;

    let storyGenreshtml="";
    for(let i=0;i<StorygenresArr.length;i++){
        storyGenreshtml+=`<div class="${StorygenresArr[i]}">${StorygenresArr[i]}</div>`;
    }
    storyGenres.innerHTML=storyGenreshtml;


    let popularTagshtml="";
    for(let i=0;i<popularTagsArr.length;i++){
        popularTagshtml+=`<div class="${popularTagsArr[i]}">${popularTagsArr[i]}</div>`;
    }
    popularTags.innerHTML=popularTagshtml;
})();

let feedhtml=`<div class="all-stories-heading">All Stories</div>`;
function loadFeed(){
    for(let i=0;i<16;i++){
          feedhtml+=`<div class="story-container">
          <div class="story-poster">
              <img src="https://i.pinimg.com/originals/bb/2b/9d/bb2b9da4872e5423cd7fcf8155953d3c.jpg" alt="">
          </div>
          <div class="story-discription">
              <p>Pumpkin and Bella! </p>
              <p>This story was created by me! Its called Pumpkin and Bella!</p>
          </div>
      </div>`;
    }
   leftSideStoryfeed.innerHTML=feedhtml;
}

loadFeed();
let quizhtml="";
function loadTopQuizzes(){

    for(let i=0;i<4;i++){
        quizhtml+=` <div class="quiz">
        <div class="quiz-poster">
            <img src="https://c4.wallpaperflare.com/wallpaper/217/1006/520/women-blonde-horse-dress-wallpaper-preview.jpg" alt="">
        </div>
        <div class="quiz-discription">
            <p>Favorite Animal Quiz</p>
        </div>
    </div>`;
    }
    topQuixArea.innerHTML=quizhtml;
}
loadTopQuizzes();