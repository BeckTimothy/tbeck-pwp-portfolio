<?php
/**
 * Constructor to create an Email for contacting Timothy Beck
 *
 * @param string $newYourName
 * @param string $newYourEmail
 * @param string $newYourEmailSubject
 * @param string $newYourEmailBody
 * @param boolean $newYourEmailVerification
 * @throws \InvalidArgumentException if inputs are empty or Invalid
 * @throws \RangeException if input data is too long
 * @throws \TypeError if data types violate type hints
 */
public function __construct(string $newYourName,
									 string $newYourEmail,
									 string $newYourEmailSubject,
									 string $newYourEmailBody,
									 boolean $newYourEmailVerification) {
	try {
		$this->setYourName($newYourName);



		$this->setYourEmail($newYourEmail);



		$this->setYourEmailSubject($newYourEmailSubject);



		$this->setYourEmailBody($newYourEmailBody);







		$this->setYourEmailVerification($newYourEmailVerification);




	} // determine if/what exception was thrown
	catch(\InvalidArgumentException | \RangeException | \TypeError | \Exception $exception) {
		$exceptionType = get_class($exception);
		throw(new $exceptionType($exception->getMessage(), 0, $exception));
	}
}
?>