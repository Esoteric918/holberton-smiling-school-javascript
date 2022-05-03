
function grabData1() {
	$.ajax({
		url: 'https://smileschool-api.hbtn.info/quotes',
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
													dataType: 'json'
												});
}
grabData1();
// window.onload = () => {
// 	grabData1();
// };
function grabData2() {

}
