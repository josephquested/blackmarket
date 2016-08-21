using UnityEngine;
using System.Collections;

public class MuzzleFlash : MonoBehaviour
{
	public float flashSpeed;
	public float timer;

	void Awake ()
	{
		Flash();
	}

	public void Flash ()
	{
		StartCoroutine(FlashCoroutine());
	}

  IEnumerator FlashCoroutine ()
	{
		Light light = GetComponent<Light>();
    while (timer > 0)
		{
			timer -= Time.deltaTime;
			light.enabled = true;
			yield return new WaitForSeconds(0.01f);
    }
		light.enabled = false;
		timer = flashSpeed;
  }
}
