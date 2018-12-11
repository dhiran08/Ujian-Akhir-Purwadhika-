import React, { Component } from 'react';
import Jam from './component/Jam';
import Gambar1 from './component/Gambar/62843.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Gambar1} className="Gambar1" alt="Gambar1" />
          <a href='https://www.freepik.com/free-vector/silhouette-of-the-taj-mahal_3462548.htm' alt="coba">Designed by Rawpixel.com </a>
          <h1>
            Percobaan Membuat Jadwal Sholat
          </h1>
          <Jam />

          <table>
            <tr>
              <td>Subuh</td>
              <td>Dzuhur</td>
              <td>Ashar</td>
              <td>Maghrib</td>
              <td>Isya</td>
            </tr>
            <tr>
              <td>04.08</td>
              <td>11.47</td>
              <td>15.14</td>
              <td>18.02</td>
              <td>19.18</td>
            </tr>
            <tr>
              <td>Catatan:</td>
              <td>disamping ini maunya ditulis hitungan mundur berapa jam, menit, detik lagi sebelum waktu sholatnya, jadi ada live time hitungan mundur. kalau sudah 10 menit terakhir sebelum masuk waktu sholat, otomatis berubah merah tulisannya</td>
            </tr>
          </table>
          <h1 color="red" /*ini kok dikasih merah ndak merah yaa? salah sintaks mungkin...*/>masih mencari tahu caranya,....</h1>
          <h1> Catatan tambahan: </h1>
          <h3> Jadwal sholat kan setiap harinya berbeda-beda kadang beda beberapa menit saja sih. berdasarkan apanya juga masih belum tau karena ada hitungan-hitungannya. bagaimana cara setiap harinya otomatis jadwal itu berganti? + setap wilayah kan jadwal sholatnya berbeda-beda, gimana secara otomatis bisa ngecek lagi buka internet dimana lalu langsung nunjukin, "ini lhoo jadwal sholat di daerahmu sekaran!" hmmm....</h3>
        </header>
      </div>
    );
  }
}

export default App;
