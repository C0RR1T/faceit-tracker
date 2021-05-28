export default interface Statistics {
    'player_id': string,
    'game_id': string,
    'lifetime': {
        'Longest Win Streak': string,
        'Win Rate %': string,
        'Recent Results': string[],
        'K/D Ratio': string,
        'Current Win Streak': string,
        'Matches': string,
        'Average Headshots %': string,
        'Total Headshots %': string,
        'Average K/D Ratio': string,
        'Wins': string
    },
    
}