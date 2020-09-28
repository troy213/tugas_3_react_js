import React, { Component } from 'react';
import ListMakanan from './../ListData/ListMakanan';

class MenuMakanan extends Component {
  constructor(props){
    super(props);
    this.state = {
      pesan: 0
    }
    this.rubahPesanan = this.rubahPesanan.bind(this);
    this.pesanan = this.pesanan.bind(this);
  }

  rubahPesanan(){
    this.setState((state,props) => {
      return({
        pesan: state.pesan + 1
      });
    });
  }

  pesanan(e){
    console.log(e.target.value);
  }

  render(){
    return(
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan :</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan gambar="../../img/nasipadang.jpg" />
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/sate.png" />
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/sotolamongan.png" />
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/nasi kentut.png" />
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan gambar="../../img/nasi kuning.jpg" />
                <center>
                  <button onClick={this.rubahPesanan}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <input
          type="text"
          onChange={this.pesanan}
        />
        <h3>Pesanan Anda : {this.state.pesan}</h3>
      </div>
    );
  }
}

export default MenuMakanan;
