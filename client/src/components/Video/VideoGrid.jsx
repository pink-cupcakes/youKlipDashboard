import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/video/videogrid.css';
import VideoItem from './VideoItem';

class VideoGrid extends Component {
  render() {
    return (
      <div className="home-video-grid">
        <VideoItem />

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Bjersen and 780 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/MTCGN_Ko2UE/maxresdefault.jpg" />
          <div className="video-grid-title">Shaclone + his whole flex team blue inting lol</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">digested oddshot</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-comment"></i> Sneaky and 25 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/HAsPWIRV1-A/maxresdefault.jpg" />
          <div className="video-grid-title">Bug: Mordekaiser w can go on Syndra's balls</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Keigo Gomi</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Imaqtpie and 675 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/pZQOjSUPI8c/maxresdefault.jpg" />
          <div className="video-grid-title">Shaclone Inting, in protest of shaco changes since assasin reworks</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">digested oddshot</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-gavel"></i> Dyrus and 65 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/kMEwOIXuCd0/maxresdefault.jpg" />
          <div className="video-grid-title">Doublelift popping off on Essence Reaver Lucian</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">digested oddshot</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Imaqtpie and 921 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/BF4Od-e0P9g/maxresdefault.jpg" />
          <div className="video-grid-title">My current gold experience</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">MILKMAN</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Imaqtpie and 257 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/DJgmjo0kgNE/maxresdefault.jpg" />
          <div className="video-grid-title">Essence reaver is a little bit too good feat. TF Blade</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Bloodyjesse</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-gavel"></i> Faker and 93 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/n37l7JWdxU8/maxresdefault.jpg" />
          <div className="video-grid-title">Cowsep's master promos are looking good.</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">khalifa30000</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Sneaky and 1,120 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/pHspDeM75QE/maxresdefault.jpg" />
          <div className="video-grid-title">Yassuo loses 1v1 to Silver IV Yasuo</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">RegalityLoL</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Bjersen and 1,543 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/OvRgt3LJcAs/maxresdefault.jpg" />
          <div className="video-grid-title">Hashinshin gets a taste of AP Kaisa</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">L_Alive</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-heart"></i> VideoGameDunkey and 73 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/dNldWTpRkHg/maxresdefault.jpg" />
          <div className="video-grid-title">Far Cry 5 Clips: Is This What It Feels Like To Be A Dark Souls Boss?</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Gryffinboredd</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">Far Cry 5</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Dyrus and 463 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/oKrOwsIoL5g/maxresdefault.jpg" />
          <div className="video-grid-title">Unfortunate events of Yorick</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Reigny</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-heart"></i> Nightblue and 28 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/sRdLYXksbrY/maxresdefault.jpg" />
          <div className="video-grid-title">Irelia play - Still lost the game though</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Panda Panda</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Imaqtpie and 921 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/BF4Od-e0P9g/maxresdefault.jpg" />
          <div className="video-grid-title">My current gold experience</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">MILKMAN</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Imaqtpie and 257 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/DJgmjo0kgNE/maxresdefault.jpg" />
          <div className="video-grid-title">Essence reaver is a little bit too good feat. TF Blade</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Bloodyjesse</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-gavel"></i> Faker and 93 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/n37l7JWdxU8/maxresdefault.jpg" />
          <div className="video-grid-title">Cowsep's master promos are looking good.</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">khalifa30000</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Sneaky and 1,120 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/pHspDeM75QE/maxresdefault.jpg" />
          <div className="video-grid-title">Yassuo loses 1v1 to Silver IV Yasuo</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">RegalityLoL</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> 1,543  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/OvRgt3LJcAs/maxresdefault.jpg" />
          <div className="video-grid-title">Hashinshin gets a taste of AP Kaisa</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">L_Alive</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-heart"></i> VideoGameDunkey and 73 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/dNldWTpRkHg/maxresdefault.jpg" />
          <div className="video-grid-title">Far Cry 5 Clips: Is This What It Feels Like To Be A Dark Souls Boss?</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Gryffinboredd</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">Far Cry 5</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-eye"></i> Dyrus and 463 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/oKrOwsIoL5g/maxresdefault.jpg" />
          <div className="video-grid-title">Unfortunate events of Yorick</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Reigny</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

        <div className="video-grid-item">
          <div className="video-grid-notification"> <i className="fas fa-heart"></i> Nightblue and 28 others  </div>
          <img  className="video-grid-img" alt="" src="http://img.youtube.com/vi/sRdLYXksbrY/maxresdefault.jpg" />
          <div className="video-grid-title">Irelia play - Still lost the game though</div>
          <div className="video-grid-userimg" ></div>
          <h2 className="video-grid-username">Panda Panda</h2>
          <h3 className="video-grid-playing">playing <span className="video-grid-game">League of Legends</span></h3>
        </div>

      </div>
    );
  }
}

export default VideoGrid;
