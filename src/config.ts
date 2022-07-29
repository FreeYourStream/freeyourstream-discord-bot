export const DEV_MODE = process.env.NODE_ENV !== 'production';

export const GUILD_ID = DEV_MODE
	? process.env.DEV_GUILD_ID
	: '699366121593372752';

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

export const TAURI_BLUE = 0x754BAB;

// people
const ADMIN_ROLES = DEV_MODE
	? [process.env.DEV_ADMIN_ROLE]
	: [
			// admin
			'742491247481978901',
			// core
			'738873387908333610'
	  ];

export const BOT_DEVS = [
	// Thijs
	'361818385811505153',
];

//  list of roles/user IDs other than the creator allowed to modify threads
export const THREAD_ADMIN_IDS = [...ADMIN_ROLES, ...BOT_DEVS];

// channels that will be automatically threaded when a message is created
export const AUTO_THREAD_CHANNELS = DEV_MODE
	? [process.env.DEV_HELP_CHANNEL]
	: [
			// #help
			'699366419485163660',
	  ];

export const REACTION_ROLE: {
	emojiName: string;
	emojiId: string;
	roleId: string;
	description: string;
}[] = DEV_MODE
	? [
			{
				emojiName: 'sausageroll',
				emojiId: '995712110925451324',
				roleId: process.env.DEV_REACTION_ROLE,
				description:
					'Join the conversation in the contributors channels (you can still view without this role)',
			},
	  ]
	: [
			{
				emojiName: 'tauri',
				emojiId: '876938722266972210',
				roleId: '986176820187631616',
				description:
					'Join the conversation in the contributors channels (you can still view without this role)',
			},
	  ];

export const REACTION_ROLE_CHANNEL = DEV_MODE
	? process.env.DEV_REACTION_ROLE_CHANNEL
	: '616210923354456064';
