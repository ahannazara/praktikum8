filterSelection(null);

function filterSelection(key) {
  $.getJSON('./test.json', function (data) {
    let menu = data.menu;

    if (key) {
      menu = menu.filter(function (value) {
        return value.Jenis === key; 
      });
    }

    $('#post-card')
      .empty()
      .append(
        menu.map(function (each) {
          return `<div class="col-md-4">
                  <div class="card border-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">jenis : ${each.Jenis}</div>
                    <div class="card-body text-dark">
                    <input class="gambar" type="image" src="${each.gambar}" alt="">
                      <h5 class="card-title">${each.nama}</h5>
                      <p class="card-text">${each.deskripsi}</p>
                      <h6 class="card-title">${each.harga}<br>${each.estimasi}</h6>
                      <button type="button" action="https://www.gojek.com/gofood/" class="btn btn-secondary">pesan sekarang</button>

                    </div>
                  </div>
                </div>`;
        })
      );
  });
}