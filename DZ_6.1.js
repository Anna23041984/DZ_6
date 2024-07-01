//Створити функцію, яка прибирає з рядка всі символи, 
//які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач.


  function remove(str, start, end) {
    return str.replace(/[^\s]/g, (_) => {
      let n = _.charCodeAt()
      return (n < start || n > end) ? '' : _
    })
    
  }
  
  const str = "Виз3333hhначен754ня середmjkjkнього ариssgy7665фметич0olного"
  console.log(remove(str, 1040, 1103))