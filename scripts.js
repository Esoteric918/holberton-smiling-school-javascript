window.onload = () => {
  quoteCarousel();
  loadcards('popular');
}


/**
 * Set up for Slick Carousel
 */

 let responsive = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrow: true,
  rows: 1,
  // variableWidth: true,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // variableWidth: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // variableWidth: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // variableWidth: true
      }
    }

  ]
}

function quoteCarousel() {
	$.ajax({
		url: 'https://smileschool-api.hbtn.info/quotes',
    dataType: 'json',
		success: success = (data) => {
			console.log(data);
			console.log($('.carousel-inner'))
      setTimeout(() => {$('.loader').css('display', 'none')}, 400)
			for(item of data) {
				if (item.id == 1) {
					$('.carousel-inner').eq(0).append(`<div class="carousel-item active">
														<div class="d-flex flex-column flex-sm-row col-sm-10 align-items-center car-helper">
															<img class="rounded-circle img-fluid px-3 mt-5 img-helper" src=${item.pic_url}
																alt="First slide">
															<div>
																<p class="px-4 mt-5">« ${item.text}</p>
																<p class="px-4"><b>${item.name}</b></p>
																<cite class="px-4">${item.title}</cite>
															</div>
														</div>`);
													} else {
				$('.carousel-inner').eq(0).append(`<div class="carousel-item">
														<div class="d-flex flex-column flex-sm-row col-sm-10 align-items-center car-helper">
															<img class="rounded-circle img-fluid px-3 mt-5 img-helper" src=${item.pic_url}
																alt="First slide">
															<div>
																<p class="px-4 mt-5">« ${item.text}</p>
																<p class="px-4"><b>${item.name}</b></p>
																<cite class="px-4">${item.title}</cite>
																</div>
																</div>`);
															}
														}
													},

												});
}

function cardmaker(data) {
  let id = document.getElementById('popular');
  console.log(id, 'is it a thing');
  itemOnCard = `<div>
  <div class="card mx-2" id="${data.id}" >
  <img src="${data['thumb_url']}" alt="thumbnail" class="card-img-top">
                  <img src="images/play.png" alt="play-button" class="position-absolute play-icon"
                    style="max-width: 64px; max-height: 64px;">
      <div class="card-body">
          <h5 class="card-title"><b>${data.title}</b></h5>
          <p class="card-text">${data["sub-title"]}</p>
          <div class="d-flex">
              <img src="${data["author_pic_url"]}" class="rounded-circle"
              style="max-width: 30px; max-height: 30px;">
              <p class="name ml-2 purple"><b>${data.author}</b></p>
          </div>
              <div class="stars d-flex justify-content-sm-between align-items-center" id='star${data.star}'>`;
      for (var on = 0; on < data.star; ++on) {
        itemOnCard += '<img src="images/star_on.png" alt="star-on" class="star_on"style="max-width: 15px; max-height: 15px;">';
      }
      for (let off = 5; off > data.star; --off) {
        itemOnCard += `<img src="images/star_off.png" alt="star-off" class="star_off" style="max-width: 15px; max-height: 15px;">`
      }
      itemOnCard += `<small class="run-time purple"><b>${data.duration}</b></small>
            </div>
        </div>
    </div>
  </div>`
  $(id).append(itemOnCard);
}

function loadcards(id) {
  // Query for data for popular or latest tutorials video section (multi-item carousel)
  $.ajax({
    type: 'GET',
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    // Before - show carousel
    beforeSend: function () {
      $('.loader').show();
    },
    success: (data) => {
      // for each tutorial, add html data
      for (let i = 0; i < data.length; i++) {
        cardmaker(data[i]);
      }
    },
    complete: function () {
      $('.loader').hide();
      $('#popular').slick(responsive);
    }
  })
}
