const mongoose = require("mongoose");
const db = require("../plugins/db")


const pageFields = {
  // Описываем модель Page. То есть из чего состоит динамическая страница сайта.

  url: {
    // Например, адрес страницы является строкой. Он обязателен и должен быть уникальным.
    type: String,
    unique: true,
    required: true,
  },
  h1: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdDate: {
    // У каждой страницы автоматически сохраняется дата создания.
    type: Date,
    default: Date.now,
  },
}

class PageController {
  constructor() {
    let currentIdSeq = null
    db.get('pagesIdSeq').then(value => {
      currentIdSeq = value
    })
    if (currentIdSeq === null) {
      db.set('pagesIdSeq', 1)
      currentIdSeq = 1
    }
    this.currentIdSeq = currentIdSeq
  }

  incrementIdSeq() {
    this.currentIdSeq += 1
    db.set('pagesIdSeq', this.currentIdSeq)
  }

  getList() {
    return db.list(
      'pageItem',
    ).then(
      matches => {
        return matches.map(match => db.get(match).then(value => {
          return JSON.parse(value)
        }))
      }
    )
  }

  getItem(id) {
    return db.get(`pageItem_${id}`).then(value => {
      return JSON.parse(value)
    })
  }

  setItem(item) {
    db.set(`pageItem_${this.currentIdSeq}`, JSON.stringify(
      { id: this.currentIdSeq, ...item }
    ))
    this.incrementIdSeq()
    return true
  }

  updateItem(item) {
    return db.set(
      `pageItem_${item.id}`, JSON.stringify(Object.assign(
        {}, db.get(`pageItem_${item.id}`), item
      ))
    )
  }
}

module.exports = new PageController()
