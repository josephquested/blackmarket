using UnityEngine;
using System.Collections;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class Building : MonoBehaviour
{
	GameController gameController;
	public GameObject canvas;
	public Text priceLabel;
	public bool isSelected;
	public int price;

	void Start ()
	{
		gameController = GameObject.FindWithTag("GameController").GetComponent<GameController>();
		SetPriceLabel();
	}

	void OnMouseOver ()
	{
		if (!isSelected)
		{
			if (Input.GetMouseButtonDown(0))
			{
				gameController.SetSelectedBuilding(this);
			}
		}
	}

	public void SetSelected (bool state)
	{
		canvas.SetActive(state);
		isSelected = state;
	}

	public void AttemptBuy ()
	{
		gameController.AttemptBuyBuilding(this);
	}

	void SetPriceLabel ()
	{
		priceLabel.text = "$" + price.ToString();
	}
}
