function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerBScore = 0

    this.reset = () => {
        this.playerBScore = 0
    }

    this.echo = () => {
       return `Love - ${scoreString[this.playerBScore]}`
    }

    this.playerBGetScore = () => {
        this.playerBScore++
    }
}

test('Echo "Love - Love" when game start', () => {
    // Arrange
    let app = new TennisGame()

    // Act
    app.reset()
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Love')
})

test('Echo "Love - Fifteen" when playerB get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerBGetScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Fifteen')
})
