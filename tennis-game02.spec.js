function TennisGame(){
  this.reset = () => {

  }
  this.echo = () => {
    return 'Fifteen - Love'
  }
}

test('Echo "Fifteen - Love" when playerA get first score', () => {
//Arrange
  let app = new TennisGame()
//Act
  app.reset()
  let result = app.echo()

//Assert
  expect(result).toBe('Fifteen - Love')
})
