## Chatrooms Schema

```
{
	_id: id,
	name: String,
	createdAt: new Date()
}
```

## Messages Schema

```
{
	_id: id,
	userId: id,
	chatroomId: id,
	content: String,
	createdAt: new Date()
}
```
