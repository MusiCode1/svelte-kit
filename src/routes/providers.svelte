<script lang="ts">
	import {
		Modal,
		ModalHeader,
		ModalBody,
		/* Spinner, */
		Card,
		CardHeader,
		CardTitle,
		CardBody,
		CardText,
		Col,
		Row,
		Form,
		FormGroup,
		Input,
		Button
	} from 'sveltestrap';

	type Provider = {
		id: number;
		name: string;
		address: string;
	};

	let edit_form: Provider = {
		id: 0,
		name: '',
		address: ''
	};

	let open = false;

	const toggle = () => (open = !open);

	const on_edit_form = (provider: Provider) => {
		edit_form = provider;
		toggle();
	};

	let list_provider: Provider[] = [
		{
			id: 1,
			name: 'Some provider',
			address: 'Address'
		},
		{
			id: 2,
			name: 'Some provider',
			address: 'Address'
		},
		{
			id: 3,
			name: 'Some provider',
			address: 'Address'
		},
		{
			id: 4,
			name: 'Some provider',
			address: 'Address'
		},
		{
			id: 5,
			name: 'Some provider',
			address: 'Address'
		},
		{
			id: 6,
			name: 'Some provider',
			address: 'Address'
		},
		{
			id: 7,
			name: 'Some provider',
			address: 'Address'
		},
		{
			id: 8,
			name: 'Some provider',
			address: 'Address'
		}
	];
</script>

<h1 class="my-4">Providers</h1>

<Row>
	{#each list_provider as provider}
		<Col sm="6" md="4" lg="3" xl="2" class="mb-4">
			<Card class="">
				<CardHeader>
					<CardTitle>
						{provider.name}
					</CardTitle>
				</CardHeader>
				<CardBody>
					<CardText>
						{provider.name}
						<br />
						{provider.address}
					</CardText>
					<Row>
						<Col>
							<div
								on:click={() => {
									on_edit_form(provider);
								}}
							>
								✏️
							</div>
						</Col>
						<Col>
							<div
								on:click={() => {
									on_edit_form(provider);
								}}
							>
								🗑️
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	{/each}
</Row>

<Modal {toggle} isOpen={open}>
	<ModalHeader>Edit provider</ModalHeader>
	<ModalBody>
		<Form
			on:submit={(e) => {
				e.preventDefault();
			}}
		>
			<FormGroup floating label="Name">
				<Input placeholder="Enter a value" bind:value={edit_form.name} />
			</FormGroup>

			<FormGroup floating label="Address">
				<Input placeholder="Enter a value" type="text" bind:value={edit_form.address} />
			</FormGroup>

			<Button type="submit">OK</Button>
			<Button
				on:click={(e) => {
					e.preventDefault();
					toggle();
				}}>Cancel</Button
			>
		</Form>
	</ModalBody>
</Modal>
