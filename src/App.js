import React from 'react'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        {
          id: '1923',
          name: 'Tas Pria Ransel Distro Original',
          price: 100000,
          quantity: 2,
          stuff: {
            image_url:
              'https://s2.bukalapak.com/img/2584349902/small/Tas_Pria_Ransel__Distro_Original_Bandung________________tas_.jpg',
            stock: 4
          },
          store: {
            id: 129,
            name: 'Kobeo Store'
          },
          category: {
            id: 1,
            name: 'Asessoris Pria'
          }
        },
        {
          id: '1987',
          name: 'Sepatu Running Adidas Original',
          price: 175000,
          quantity: 1,
          stuff: {
            image_url:
              'https://s1.bukalapak.com/img/6024418382/small/SEPATU.jpg',
            stock: 8
          },
          store: {
            id: 315,
            name: 'sepatuonlineinc'
          },
          category: {
            id: 2,
            name: 'Sepatu Pria'
          }
        },
        {
          id: '2001',
          name:
            'Jaket Virendra Polos. Tersedia Semua Logo Club Bola. Jacket Soccer Waterproof Promo',
          price: 200000,
          quantity: 1,
          stuff: {
            image_url:
              'https://s0.bukalapak.com/img/5759820062/small/Jaket_Virendra_Polos_Tersedia_Semua_Logo_Club_Bola_Jacket_So.jpg',
            stock: 15
          },
          store: {
            id: 177,
            name: 'Butik Soccer ID'
          },
          category: {
            id: 3,
            name: 'Pakaian'
          }
        },
        {
          id: '2024',
          name:
            'Baju Koko Shaquille Biru Kemeja Soccer Baju Sholat Muslim Gamis Kemko',
          price: 140000,
          quantity: 1,
          stuff: {
            image_url:
              'https://s2.bukalapak.com/img/2681803562/small/Baju_Koko_Shaquille_Hiaju_Kemeja_Soccer_Baju_Sholat_Muslim_G.jpg',
            stock: 20
          },
          store: {
            id: 177,
            name: 'Butik Soccer ID'
          },
          category: {
            id: 3,
            name: 'Pakaian'
          }
        },
        {
          id: '2531',
          name: 'SEPATU SNEAKERS PRIA SEPATU PRIA',
          price: 185000,
          quantity: 1,
          stuff: {
            image_url:
              'https://s1.bukalapak.com/img/6453738872/small/1530104514938_scaled.jpg',
            stock: 4
          },
          store: {
            id: 398,
            name: 'NF Footwear'
          },
          category: {
            id: 2,
            name: 'Sepatu Pria'
          }
        }
      ]
    }
  }
  onRemoveItem(id) {
    // console.log(id)
    this.setState(state => {
      // console.log(state.items)

      const items = state.items.filter(item => item.id !== id)
      // console.log(items)

      return {
        items
      }
    })
  }
  totalPrice() {
    let total = 0
    let result = this.state.items.map(item => {
      let iXq = item.price * item.quantity
      total = total + iXq
      return total
    })
    if (result.length === 0) {
      return 'kosong'
    }
    const PriceTotal = new Intl.NumberFormat('IND', {
      maximumSignificantDigits: 3,
      style: 'currency',
      currency: 'IDR'
    }).format(result[result.length - 1])
    return PriceTotal
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-4"></div>

          <div className="col-4">
            <div>
              <button style={{ width: '100%', marginTop: '50px' }}>
                Keranjang Belanja
              </button>
            </div>
            {this.state.items.map((item, index) => {
              // console.log(item)
              const Price = new Intl.NumberFormat('IND', {
                maximumSignificantDigits: 3,
                style: 'currency',
                currency: 'IDR'
              }).format(item.price)
              return (
                <div style={{ marginTop: '10px' }} key={index}>
                  <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                      {item.store.name}
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p>{item.name}</p>
                          </div>
                          <div>
                            <p>{Price}</p>
                          </div>
                        </div>

                        <div className="col-6">
                          <img src={item.stuff.image_url} alt="" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div>
                            {item.quantity === 1 ? (
                              <button disabled>-</button>
                            ) : (
                              <button
                                onClick={e => {
                                  e.preventDefault()
                                  // this.IncrementQuantity(index)
                                  // console.log(this.state.items[index].id)
                                  this.setState(prevState => ({
                                    items: prevState.items.map(obj =>
                                      obj.id === this.state.items[index].id
                                        ? Object.assign(obj, {
                                            quantity:
                                              this.state.items[index].quantity -
                                              1
                                          })
                                        : obj
                                    )
                                  }))
                                }}
                              >
                                -
                              </button>
                            )}

                            <input
                              type="number"
                              style={{ width: '100px', margin: '10px' }}
                              onChange={e => {
                                this.setState.items({
                                  quantity: e.target.value
                                })
                              }}
                              value={item.quantity}
                              readOnly
                            />
                            {item.quantity === item.stuff.stock ? (
                              <button disabled>+</button>
                            ) : (
                              <button
                                onClick={e => {
                                  e.preventDefault()
                                  // this.IncrementQuantity(index)
                                  // console.log(this.state.items[index].id)
                                  this.setState(prevState => ({
                                    items: prevState.items.map(obj =>
                                      obj.id === this.state.items[index].id
                                        ? Object.assign(obj, {
                                            quantity:
                                              this.state.items[index].quantity +
                                              1
                                          })
                                        : obj
                                    )
                                  }))
                                }}
                              >
                                +
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="col-6">
                          <button
                            className=""
                            style={{ margin: '10px' }}
                            onClick={e => {
                              e.preventDefault()
                              this.onRemoveItem(this.state.items[index].id)
                            }}
                          >
                            <FontAwesomeIcon icon="trash" size="2x" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <hr />

            <div className="row" style={{ margin: '50px', textAlign: 'left' }}>
              <div className="col-8">{this.totalPrice()}</div>
              <div className="col-4">
                <button>Bayar</button>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    )
  }
}

export default App
