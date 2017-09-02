function TennisGame(){
  this.reset = () => {

  }
  this.echo = () => {
    return 'Love - Fifteen'
  }
}

test('Echo "Love - Fifteen" when playerB get first score', () => {
//Arrange
  let app = new TennisGame()
//Act
  app.reset()
  let result = app.echo()

//Assert
  expect(result).toBe('Love - Fifteen')
})
