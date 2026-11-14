export interface CartItem {
	id: string;
	title: string;
	price: string;
}

const STORAGE_KEY = "ezer-cart";

export function formatCartCount(count: number): string {
	return `[${String(count).padStart(2, "0")}]`;
}

export function readCart(): CartItem[] {
	if (typeof window === "undefined") return [];

	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];

		const parsed: unknown = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];

		return parsed.filter(
			(item): item is CartItem =>
				typeof item === "object" &&
				item !== null &&
				typeof (item as CartItem).id === "string" &&
				typeof (item as CartItem).title === "string" &&
				typeof (item as CartItem).price === "string",
		);
	} catch {
		return [];
	}
}

export function writeCart(items: CartItem[]): void {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	} catch {
		// Private browsing or a full quota should still leave the UI usable.
	}

	window.dispatchEvent(new CustomEvent<CartItem[]>("ezer:cart-change", { detail: items }));
}

export function addToCart(item: CartItem): void {
	const items = readCart();
	if (items.some((entry) => entry.id === item.id)) return;
	writeCart([...items, item]);
}

export function removeFromCart(id: string): void {
	writeCart(readCart().filter((item) => item.id !== id));
}

export function isInCart(id: string): boolean {
	return readCart().some((item) => item.id === id);
}
