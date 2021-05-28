import Game from "./Game";
import Infraction from "./Infraction";
import Settings from "./Settings";

export default interface Player {
    'player_id': string,
    'nickname': string,
    'avatar': string,
    'country': string,
    'cover_image': string,
    'cover_featured_image': string,
    'infractions': Infraction,
    'platforms': {
        'steam': string
    },
    'games': {
        'csgo': Game
    },
    'friends_ids': string[],
    'settings': Settings,
    'new_steam_id': string,
    'steam_id_64': string,
    'steam_nickname': string,
    'membership_type': 'free'
    'memberships': string[]
    'faceit_url': string
}