'use strict'

var WishContract = function() {
  LocalContractStorage.defineMapProperty(this, "wishes")
  LocalContractStorage.defineProperty(this, "wishCount", null)
  //wishingWell stores the total wishes in NAS to be granted to a user randomly each week
  LocalContractStorage.defineMapProperty(this, "wishingWell")
}

WishContract.prototype = {
  init: function() {
    this.wishCount = 0
    this.wishingWell.set('balance', new BigNumber(0))
  },

  makeAWish: function(name, wish) {
    if (!wish || wish.trim() === "") return { error: "Please provide a wish"}

    var id = Blockchain.transaction.from;
    var value = Blockchain.transaction.value
    var wishObj = { id, name, wish, value }
    var wishCount = new BigNumber(this.wishCount).plus(1)
    this.wishes.set(wishCount, wishObj)
    this.wishCount = wishCount

    // var balance = +this.wishingWell
    // var newBalance = new BigNumber(balance).plus(value)

    var orig_deposit = this.wishingWell.get('balance')
    var newBalance = value.plus(orig_deposit)

    this.wishingWell.set('balance', newBalance )


    return { success: { wishObj, newBalance } }
  },

  getWishes: function(count) {
    var wishes = []
    var wishCount = +this.wishCount

    if (!count) count = 100
    if (count > wishCount) count = wishCount

    for (var i = 1; wishCount >= i && count >= i; i++) {
      wishes.push(this.wishes.get(wishCount - count + i))
    }

    return wishes
  },

  getWishCount: function() {
    return +this.wishCount
  },

  getWishingWellBalance: function() {
    return +this.wishingWell.get('balance')
  },

  grantWish: function() {
    var wishes = []
    var wishCount = +this.wishCount
    var count = Math.floor(Math.random() * wishCount)
    return this.wishes.get(wishCount - count).id

  }

}

module.exports = WishContract
